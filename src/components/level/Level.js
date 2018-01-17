import React, { Component } from 'react';
import PropTypes from "prop-types";
import { BLOCK_DIMENSION, STAGE_HEIGHT, STAGE_WIDTH } from '../../constants';
import BlockContainer from '../block/BlockContainer';
import FloorContainer from '../floor/FloorContainer';
import SixContainer from '../six/SixContainer';
import Matter from 'matter-js';

class Level extends Component {
  static propTypes = {
    addBlocks: PropTypes.func.isRequired,
    countdown: PropTypes.number,
    rows: PropTypes.number.isRequired,
    scale: PropTypes.number.isRequired,
    sixY: PropTypes.number.isRequired,
  }

  static composites = [
    [0,0,1,1,1],

    [0,0,0,0,0],

    [0,0,1,1,2],

    [0,0,1,2,2],

    [0,1,2,3,4],

    [0,0,1,1,1,
     0,0,2,2,2],

    [0,0,2,3,3,
     1,1,2,3,3],

    [0,0,1,2,2,
     3,4,1,5,2],

    [0,0,0,1,1,
     2,2,0,1,1],

    [0,0,0,1,1,
     2,2,0,3,1,
     2,3,3,3,1],

    [0,0,1,1,2,
     0,1,1,2,2,
     0,3,3,3,3],

    [0,0,1,2,2,
     0,1,1,2,3,
     4,5,6,7,3,
     8,8,9,9,3],

    [0,0,1,1,2,
     0,3,3,1,2,
     4,4,3,5,5,
     6,7,7,5,8],

    [0,0,1,1,2,
     3,1,1,4,4,
     3,5,5,5,4,
     3,3,3,5,4],

    [0,1,1,2,2,
     3,3,1,1,4,
     3,5,5,5,4,
     3,5,4,4,4],

    [0,1,1,2,2,
     3,3,1,2,4,
     3,5,6,4,4,
     5,5,7,8,8],

    [0,0,0,1,1,
     2,3,3,3,1,
     2,3,4,3,1,
     2,2,5,6,6],

    [0,0,1,1,2,
     3,0,1,4,4,
     3,3,5,6,4,
     7,7,8,6,6]
  ];

  componentWillReceiveProps(nextProps) {
    const { addBlocks, beginCountdown, countdown, rows, setStageY, sixX, sixY } = nextProps;
    if (countdown === undefined) {

      let totalRows = rows;
      let currentRows = 0;

      const blocks = [];

      if (
        sixX > BLOCK_DIMENSION * 2 &&
        sixX < BLOCK_DIMENSION * 8
      ) {
        if (this.props.sixY !== sixY) {
          setStageY(sixY);
        }

        while (totalRows * BLOCK_DIMENSION < sixY + BLOCK_DIMENSION) {
          const composite = Level.composites[Math.floor(Math.random() * Level.composites.length)];

          for (let i = 0; composite.indexOf(i) > -1; i += 1) {
            const parts = [];

            for (let j = 0; j < composite.length; j += 1) {
              if (composite[j] === i) {
                parts.push(Matter.Bodies.rectangle(
                  ((j % 5) * BLOCK_DIMENSION) + STAGE_WIDTH / 2 - BLOCK_DIMENSION * 2,
                  (Math.floor(j / 5) + totalRows) * BLOCK_DIMENSION + STAGE_HEIGHT / 2 + BLOCK_DIMENSION / 2,
                  BLOCK_DIMENSION,
                  BLOCK_DIMENSION
                ));
              }
            }

            blocks.push(Matter.Body.create({ parts }));
          }

          currentRows += composite.length / 5;
          totalRows += composite.length / 5;
        }
      } else {
        beginCountdown();
      }

      if (currentRows > 0) {
        addBlocks(blocks, currentRows);
      }
    }
  }

  getWrapperStyles() {
    const { scale, stageY } = this.props;

    return {
      transform: `translateY(${(-stageY + STAGE_HEIGHT / 2 - BLOCK_DIMENSION) * scale}px) scale(${scale})`,
      transformOrigin: 'top left',
    }
  }

  render() {
    const { blockIds } = this.props;

    return (
      <div style={this.getWrapperStyles()}>
        <SixContainer />
        <FloorContainer />
        {blockIds.map(id =>
          <BlockContainer id={id} key={`block_${id}`} />
        )}
      </div>
    )
  }
}

export default Level;
