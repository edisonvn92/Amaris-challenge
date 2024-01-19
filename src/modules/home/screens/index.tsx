import React, { useReducer, useState } from 'react';
import { CommandForm, CommandLogs, PlayField } from '../components';
import { Command, Direction, GridLimit, PivotOption, RobotStatus, } from '../models';

export const HomeScreen: React.FC = () => {
    const [commandList, setCommandList] = useState<string[]>([]);

    const commandReducer = (state: RobotStatus, action: Command) => {
        let newState = { ...state };
        switch (action.type) {
            case "PLACE":
                newState = action.payload;
                setCommandList([...commandList, `PLACE: ${action.payload.x} ${action.payload.y} ${action.payload.direction}`]);
                break;
            case "MOVE":
                if (newState.direction === Direction.NORTH && newState.y < GridLimit.MAX_Y) newState.y++;
                if (newState.direction === Direction.SOUTH && newState.y > GridLimit.MIN_Y) newState.y--;
                if (newState.direction === Direction.EAST && newState.x < GridLimit.MAX_X) newState.x++;
                if (newState.direction === Direction.WEST && newState.x > GridLimit.MIN_X) newState.x--;
                setCommandList([...commandList, 'MOVE'])
                break;
            case "PIVOT":
                const directionOrder = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
                const currentIndex = directionOrder.findIndex(direction => newState.direction === direction);
                if (action.payload === PivotOption.LEFT) {
                    if (currentIndex === 0) newState.direction = Direction.WEST;
                    else newState.direction = directionOrder[currentIndex - 1];
                    setCommandList([...commandList, 'TURN LEFT'])
                }
                else {
                    if (currentIndex === 3) newState.direction = Direction.NORTH;
                    else newState.direction = directionOrder[currentIndex + 1];
                    setCommandList([...commandList, 'TURN RIGHT'])
                }
                break;
            case "REPORT":
                setCommandList([...commandList, `REPORT POSITION: ${newState.x} ${newState.y} ${newState.direction}`])
                break;
            default:
                return newState;
        }
        return newState;
    }

    const [roboStatus, dispatchCommand] = useReducer(commandReducer, { x: 0, y: 0, direction: undefined });

    return <div className='w-full h-full'>
        <CommandForm status={roboStatus} dispatch={dispatchCommand} />
        <div className='grid grid-cols-2'>
            <PlayField status={roboStatus} />
            <CommandLogs logs={commandList} />
        </div>
    </div>
}