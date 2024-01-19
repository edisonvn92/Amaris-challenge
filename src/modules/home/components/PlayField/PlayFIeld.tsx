import React, { useState } from 'react';
import { RobotStatus } from '../../models';

interface PlayFieldProps {
    status: RobotStatus
}
export const PlayField: React.FC<PlayFieldProps> = (props: PlayFieldProps) => {
    const { status } = props;
    const positionArr = [];
    for (let y = 4; y >= 0; y--) {
        for (let x = 0; x < 5; x++) {
            positionArr.push({ x, y })
        }
    }

    return <div className='w-full aspect-square grid grid-cols-5 border-4 border-solid border-blue-600 gap-1 bg-blue-600'>
        {
            positionArr.map((position) => {
                return <div className='bg-white aspect-square flex flex-col justify-center '>
                    {position.x === status.x && position.y === status.y ? <div className='w-20 h-20 m-auto bg-blue-500 rounded-full' /> : undefined}

                </div>
            })
        }

    </div>
}