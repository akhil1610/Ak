import axios from 'axios'
import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP}from './ServicesElements'

const api = axios.create({
    baseURL : `https://jsonplaceholder.typicode.com/posts`
})

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper> 
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expences</ServicesH2>
                    <ServicesP>We help to reduce fees and increse revenue and productivity</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices </ServicesH2>
                    <ServicesP>You can access our platform from anywher from the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>Anlock our special membership card that return 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
