import { DateTime } from "luxon";
import IGraphNode from "./IGraphNode";

export interface IUser extends IGraphNode {
	DiscordId: string | null;

	// Display
	Username: string;
	NameFirst: string;
	NameLast: string;

	DateJoined: DateTime;

	LastLogin: DateTime;
	LastModified: DateTime;

	NeedsSetup: boolean;
}

export default IUser;
