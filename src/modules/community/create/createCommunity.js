import React from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export const createCommunity = gql`
    mutation createCommunity(
        $name: String!,
        $picture: Upload,
        $description: String!,
        $country: String!,
        $latitude: Float!
        $longitude: Float!
    ) {
        createCommunity(
            input: {
                name: $name
                picture: $picture
                description: $description
                country: $country
                latitude: $latitude
                longitude: $longitude
            }
        )
    }
`
