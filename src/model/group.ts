import { Link } from './link';

export class Group {
    public title: string;
    public links: Link[];
    public position: { x: number, y: number };
}