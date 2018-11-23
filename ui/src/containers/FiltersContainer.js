import React  from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Filters from '../components/Filters'


const FiltersContainer = () => (
  <div>
    <Query
      query={gql`
        {
          allLocationTags {
            id
            name
          }
          allObjectTags {
            id
            name
          }
          allPersonTags {
            id
            name
          }
          allColorTags {
            id
            name
          }
          allStyleTags {
            id
            name
          }
          allCameras {
            id
            make
            model
          }
          allLenses {
            id
            name
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        let filterData = []
        if (data.allLocationTags.length) {
          filterData.push({
            name: 'Locations',
            items: data.allLocationTags.map((tag) => (
              {id: tag.id, name: tag.name}
            )),
          })
        }
        if (data.allObjectTags.length) {
          filterData.push({
            name: 'Objects',
            items: data.allObjectTags.map((tag) => (
              {id: tag.id, name: tag.name}
            )),
          })
        }
        if (data.allPersonTags.length) {
          filterData.push({
            name: 'People',
            items: data.allPersonTags.map((tag) => (
              {id: tag.id, name: tag.name}
            )),
          })
        }
        if (data.allColorTags.length) {
          filterData.push({
            name: 'Colors',
            items: data.allColorTags.map((tag) => (
              {id: tag.id, name: tag.name}
            )),
          })
        }
        if (data.allStyleTags.length) {
          filterData.push({
            name: 'Styles',
            items: data.allStyleTags.map((tag) => (
              {id: tag.id, name: tag.name}
            )),
          })
        }
        if (data.allStyleTags.length) {
          filterData.push({
            name: 'Cameras',
            items: data.allCameras.map((camera) => (
              {id: camera.id, name: `${camera.make} ${camera.model}`}
            )),
          })
        }
        if (data.allStyleTags.length) {
          filterData.push({
            name: 'Lenses',
            items: data.allLenses.map((lens) => (
              {id: lens.id, name: lens.name}
            )),
          })
        }

        return <Filters data={filterData} />
      }}
    </Query>
  </div>
)

export default FiltersContainer
