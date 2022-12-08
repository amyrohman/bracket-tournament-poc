import React from "react";
import { SingleEliminationBracket, Match, SVGViewer } from '@g-loot/react-tournament-brackets';
import matches from "../stub/singleElimination.json"

export const SingleElimination = () => (
    <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        svgWrapper={({ children, ...props }) => (
            <SVGViewer width={500} height={500} {...props}>
                {children}
            </SVGViewer>
        )}
    />
);
