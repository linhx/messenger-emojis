export declare const groupPeople = "p";
export declare const groupActivity = "a";
export declare const groupNature = "n";
export declare const groupObjects = "o";
export declare const groupSymbols = "s";
export declare const groupFood = "f";
export declare const groupTravelPlaces = "t";
export declare const groupFlags = "fl";
export declare const emojisList: ({
    index: number;
    name: string;
    key: string;
    group: string;
    unicode: string;
    skinTone?: undefined;
} | {
    index: number;
    name: string;
    key: string;
    unicode: string;
    group: string;
    skinTone: string;
})[];
export declare type Emoji = {
  key: string;
  name?: string;
  imgUrl: string;
};
export declare const emojiGroups: Map<string, Emoji[]>;
