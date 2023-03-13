export type Coordinates = [x: number, y: number, z: number];

export type Social = {
  name: string;
  color: string;
  description: {
    text: string;
    position: Coordinates;
  };
  object: {
    path: string;
    position: Coordinates;
    scale: Coordinates;
  };
};
