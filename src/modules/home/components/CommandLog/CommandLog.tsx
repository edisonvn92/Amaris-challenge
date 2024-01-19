import React, { useState } from 'react';

interface CommandLogsProps {
    logs: string[]
}

export const CommandLogs: React.FC<CommandLogsProps> = (props: CommandLogsProps) => {
    const {logs} = props;
    return <div className='w-full p-4 text-center'>
        {logs.map((log) => <h3 className='mb-4'>{log}</h3>)}
    </div>

}