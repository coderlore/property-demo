export type ResultType = {
    id: string;
    name: String;
    picture: string;
    units: [
        {
            type: String;
            minOccupancy: String,
            maxOccupancy: String,
            sqft: String,
            amenities: []
        }
    ]
    children?: JSX.Element|JSX.Element[];
}