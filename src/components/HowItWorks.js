import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

	a {
		text-decoration: none;
		color: white;
	}
	a:hover {
		color: #13d2c5;
	}

	h1 {
		font-size: 42px;
		text-align: center;
		margin-bottom: 60px;
		@include mappy-query(tablet) {
			font-size: 36px;
		}
		@include mappy-query(phone-range) {
			font-size: 26px;
			margin-bottom: 40px;
		}
	}

	h2 {
		font-size: 26px;
		text-align: center;
		margin-bottom: 20px;
		@include mappy-query(phone-range) {
			font-size: 22px;
		}
	}

	.intro-text {
		margin-bottom: 60px;
		text-align: center;
	}

	section {
		margin-bottom: 40px;
		padding-bottom: 30px;
		border-bottom: 1px dashed #ddd;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&:last-child {
			border: none;
			margin-bottom: 0;
		}

		strong {
			font-family: avenir-heavy;
			display: flex;
			font-size: 21px;
			width: 35px;
			height: 35px;
			border-radius: 50%;
			align-items: center;
			justify-content: center;
			background-color: #13d2c5;
			color: #fff;
		}
		p {
			@include mappy-query(phone-range) {
				font-size: 17px;
			}
		}
	}
`

export default () => (
	<Wrapper>
		<div className="how-it-works-page">
			<h1>Getting Started</h1>
			<section className="create-account">
				<strong>1</strong>
				<h2>Create a Last Farewells Account</h2>
				<p>
					Creating an account is free, effortless, and gives you peace of mind.
					Save your loved ones from having unresolved anguish.
				</p>
				<a href="/signup">
					<button>Sign Up Today</button>
				</a>
			</section>

			<section className="write-letters">
				<strong>2</strong>
				<h2>Write Your Last Letters</h2>
				<p>
					Write letters to friends and family to be delivered after you are
					gone. Describe what your relationship meant to you, tell them
					something you always wanted too, or simply let them know you love and
					miss them. Letters can be scheduled to be sent immediately upon your
					passing or scheduled to be sent at a designated date or event.{' '}
				</p>
				<a href="/letters/create">
					<button>Write a Last Letter</button>
				</a>
			</section>

			<section>
				<strong>3</strong>
				<h2>Create a Memorial Page</h2>
				<p>
					A Memorial Page is a place to comemorate and celebrate your life,
					where you can be in charge of the story and legacy you leave behind.
					Write your Self-Obituary, create a Life Timeline of special events that people can scroll
					through, or make a Bucket List that your friends can carry out after your
					passing. Your Memorial Page is just that, a memorial to your life that
					you're in charge of.
				</p>
				<a href="/my-legacy">
					<button>Build a Memorial Page</button>
				</a>{' '}
			</section>

			<section>
				<strong>4</strong>
				<h2>Choose Your Last Contacts</h2>
				<p>
					Choose up to 5 people to be your Last Contacts. These individuals will
					be responsible for confirming your death with Last Farewells, which
					will start setting in motion the items you've outlined in your Last
					Farewells account, like sending your Last Letters and making your
					Memorial Page available to the public. Inviting and managing your Last
					Contacts is easy and seamless with Last Farewells' account dashboard.{' '}
				</p>
				<a href="/legacy-contacts">
					<button>Add Your Last Contacts</button>
				</a>
			</section>
		</div>
	</Wrapper>
)
