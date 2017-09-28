import React, { Component } from 'react'
import styled from 'styled-components'
import Letters from './letters'
import Legacy from './legacy'
import HowItWorks from './HowItWorks'
import FAQ from './FAQ'

class ClientApp extends Component {
	state = {}

	render() {
		const Wrapper = styled.div`
			font-family: avenir;
			margin: 0 auto;
			header {
				font-family: Avenir-Heavy;
				height: 65px;
				line-height: 65px;
				text-align: center;
				box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
				font-size: 40px;
				background: rgb(255, 255, 255);
			}
			.hero-text {
				font-family: avenir-heavy;
				display: inline-block;
				vertical-align: middle;
				width: 40%;
				font-size: 72px;
				line-height: 80px;
				margin-bottom: 50px;
				position: absolute;
				margin-left: auto;
				margin-right: auto; 
				left: 15%;
				bottom: 20%;
				text-align: left;
			}
			.intro-text {
				margin-top: 5%;
				font-size: 20px;
			}
			.hero-image {
				background-size: 100%;
				background-repeat: no-repeat;
				width: 100%;
				height: 100vh;
				background-position: center;
				position: relative;
			}
			.segment {
				padding: 120px 0 90px;
				@media (min-width: 720px) {
					padding: 90px 0 60px;
				}
			}
			.prepare {
				display: flex;
				padding: 4%;
				background: white;
				height: 22%;
				line-height: 1.58;
				width: 100%;
			}

			.prepare-title {
				margin: 0 0 40px;
				font-size: 32px;
				font-family: avenir-heavy;
			}
			.intro-text {
				text-align: left;
				width: 33%;
				margin-left: 5%;
			}
			.spacing {
				height: 20px;
			}
			.prepare-image {
				background-size: 65%;
				background-repeat: no-repeat;
				width: 45%;
				height: 700px;
				background-position: center;
				padding-left: 0;
			}
			.legacy {
				padding: 4%;
				display: flex;
				height: 22%;
				width: 100%;
			}
			button {
				background-color: #13d2c5;
				box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
				-webkit-transition: all 0.3s ease;
				transition: all 0.3s ease;
				text-transform: none;
				font-family: 'Avenir-Heavy';
				font-size: 18px;
				color: #fff;
				height: 50px;
				width: auto;
				padding: 0 40px;
				border: 0;
				border-radius: 50px;
				margin-top: 30px;
			}
			button:hover {
				background-color: white;
				color: #13d2c5;
				cursor: pointer;
				border: 1px solid #13d2c5;
			}
			.legacy-text {
				width: 33%;
				height: 400px;
				padding: 7%;
				line-height: 1.58;
				font-size: 20px;
			}
			.legacy-image {
				margin-left: 30px;
				background-size: 68%;
				background-repeat: no-repeat;
				width: 40%;
				height: 700px;
				background-position: center;
			}
			.info {
                background: white;
				display: flex;
				flex-direction: row;
			}

			.how-it-works,
			.faq {
				line-height: 1.58;
				font-size: 20px;
				padding: 5%;
				width: 40%;
			}
		`

		return (
			<Wrapper>
				<header>
					<div />Last Farewells
				</header>
				<div className="hero-image">
					<h1 className="hero-text">
						Create meaningful goodbyes with Last Farewells.
					</h1>
				</div>
				<Letters />
				<Legacy />
				<div className="info">
					<div className="how-it-works">
                        <HowItWorks/>
					</div>
					<div className="faq">
                    <FAQ/>
					</div>
				</div>
			</Wrapper>
		)
	}
}

export default ClientApp
