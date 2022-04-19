import React from 'react'
import RecomendationsItem from "../components/LandingPage/RecomendationsItem"

const LandingRecomendations = () => {
  return (
    <div className="LandingRecomendations" id="recomendations">
        <h2 className="LandingRecomendations-title">Nuestras recomendaciones</h2>
        <div className="recomendations_container">
            <RecomendationsItem></RecomendationsItem>
        </div>
    </div>
  )
}

export default LandingRecomendations