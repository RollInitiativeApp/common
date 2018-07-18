import IGraphNode from "./IGraphNode";
import IAbilityScores from "./IAbilityScores";

import { DateTime } from "luxon";

/**
 * Represents a character.
 */
export interface ICharacter extends IGraphNode, IAbilityScores {
	Name: string;
	Level: number;
	InitiativeMod: number;
	Health: number;
	Created: DateTime;

	getModifier(score: number): number;
}

export default ICharacter;
