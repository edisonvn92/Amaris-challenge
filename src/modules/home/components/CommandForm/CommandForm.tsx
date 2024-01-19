import { Button } from 'antd';
import React, { useState } from 'react';
import { Command, Direction, GridLimit, PivotOption, RobotStatus } from '../../models';
import { PlaceFormModal } from './PlaceFormModal';

interface CommandFormProps {
    status: RobotStatus,
    dispatch: React.Dispatch<Command>
}
export const CommandForm: React.FC<CommandFormProps> = (props: CommandFormProps) => {
    const { status, dispatch } = props;
    const [isPlaceFormModalOpened, setIsPlaceFormModalOpen] = useState<boolean>(false)
    let [input, setInput] = useState<string>('');

    const setRobotStatus = (value: RobotStatus) => {
        dispatch({ type: "PLACE", payload: value });
        setIsPlaceFormModalOpen(false);
    }

    const isMoveDisabled = () => {
        switch (status.direction) {
            case Direction.NORTH: return status.y === GridLimit.MAX_Y;
            case Direction.SOUTH: return status.y === GridLimit.MIN_Y;
            case Direction.EAST: return status.x === GridLimit.MAX_X;
            case Direction.WEST: return status.x === GridLimit.MIN_X;
            default: return false;
        }
    }

    return <div className='w-full p-4 mb-4'>
        <div className='w-full mb-4 text-center'>
            <h2 className=''>Command Options</h2>
        </div>
        <div className='w-full flex justify-between px-[20%]'>
            <Button onClick={() => setIsPlaceFormModalOpen(true)}>PLACE</Button>
            <Button disabled={!status.direction || isMoveDisabled()} onClick={() => dispatch({ type: "MOVE", payload: undefined })}>MOVE</Button>
            <div className='flex gap-3'>
                <Button disabled={!status.direction} onClick={() => dispatch({ type: "PIVOT", payload: PivotOption.LEFT })}>TURN LEFT</Button>
                <Button disabled={!status.direction} onClick={() => dispatch({ type: "PIVOT", payload: PivotOption.RIGHT })}>TURN RIGHT</Button>
            </div>
            <Button disabled={!status.direction} onClick={() => dispatch({ type: "REPORT", payload: undefined })}>REPORT</Button>
        </div>

        <PlaceFormModal status={status} isOpened={isPlaceFormModalOpened} setIsOpened={setIsPlaceFormModalOpen} onOK={setRobotStatus} />

    </div>
}