export default interface IGraphNode {
	/**
	 * A unique identifier for this node.
	 */
	Unique: string;

	save(): Promise<boolean>;
}
