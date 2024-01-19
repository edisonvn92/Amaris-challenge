import { InputNumber, Modal, Select } from 'antd';
import React, { useState } from 'react';
import { Direction, GridLimit, RobotStatus } from '../../models';

interface PlaceFormModalProps {
    status: RobotStatus,
    isOpened: boolean,
    setIsOpened: React.Dispatch<boolean>,
    onOK: (value: RobotStatus) => void;
}

export const PlaceFormModal: React.FC<PlaceFormModalProps> = (props: PlaceFormModalProps) => {
    const { status, isOpened, setIsOpened, onOK } = props
    const [statusValue, setStatusValue] = useState<RobotStatus>({ ...status })
    const directionOptions = [
        {
            value: Direction.NORTH,
            label: "NORTH"
        },
        {
            value: Direction.SOUTH,
            label: "SOUTH"
        },
        {
            value: Direction.EAST,
            label: "EAST"
        },
        {
            value: Direction.WEST,
            label: "WEST"
        },
    ]
    return <Modal title="Place Form" open={isOpened} onCancel={() => setIsOpened(false)} onOk={() => onOK(statusValue)} okText="Place">
        <div className='flex w-full mb-4'>
            <div className='w-[40%]'>
                <label className='font-bold ml-4'>X Value</label>
            </div>

            <InputNumber className='w-[40%]' placeholder='X value' max={GridLimit.MAX_X} min={GridLimit.MIN_X}
             value={statusValue.x} onChange={(e) => setStatusValue({ ...statusValue, x: e || 0 })} />
        </div>

        <div className='flex w-full mb-4'>
            <div className='w-[40%]'>
                <label className='font-bold ml-4'>Y Value</label>
            </div>
            <InputNumber className='w-[40%]' placeholder='X value' max={GridLimit.MAX_Y} min={GridLimit.MIN_Y} 
            value={statusValue.y} onChange={(e) => setStatusValue({ ...statusValue, y: e || 0 })} />
        </div>

        <div className='flex'>
            <div className='w-[40%]'>
                <label className='font-bold ml-4'>Direction Value</label>
            </div>
            <Select className='w-[40%]' options={directionOptions} value={statusValue.direction}
             onChange={(e) => setStatusValue({ ...statusValue, direction: e || null })} />
        </div>
    </Modal>

}