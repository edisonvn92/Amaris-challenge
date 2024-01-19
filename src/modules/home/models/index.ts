export enum Direction {
    NORTH = "NORTH",
    EAST = "EAST",
    SOUTH = "SOUTH",
    WEST = "WEST"
}
export enum PivotOption {
    LEFT = "Left",
    RIGHT = "Right"
}
export interface RobotStatus {
    x: number,
    y: number,
    direction: Direction | undefined
}
export interface Command {
    type: "PLACE" | "MOVE" | "PIVOT" | "REPORT",
    payload: any
}

export enum GridLimit {
    MIN_X = 0,
    MAX_X = 4,
    MIN_Y = 0,
    MAX_Y = 4
}