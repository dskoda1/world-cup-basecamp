// @flow

export type Team = {
    code: string,
    country: string,
    goals: ?number,
};

export type Match = {
    home_team: Team,
    away_team: Team,
    venue: string,
    location: string,
    status: string,
    time: string,
    datetime: string,
    last_event_update_at: string,
    last_score_update_at: string,
    fifa_id: string
};