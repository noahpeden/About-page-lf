import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	a {
		text-decoration: underline;
		color: #4299c5;
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
			font-family: $avenir-bold;
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
			<h1>How It Works</h1>
			<section className="create-account">
				<strong>1</strong>
				<h2>Create a Last Farewells Account</h2>
				<p>
					Creating an account is free, effortless, and gives you peace of mind. Save your loved ones from having unresolved anguish.
				</p>
					<button href="/signup">Sign Up Today</button>
			</section>

			<section className="write-letters">
				<strong>2</strong>
				<h2>Write your Last Letters</h2>
				<p>
					Write letters to friends and family to be delivered after you are
					gone. Describe what your relationship meant to you, tell them
					something you always wanted too, or just simply let them know you love
					and will miss them. This can be a difficult task but one that will
					leave a last impression on the recipient. Letters can be scheduled to
					be sent immediately upon confirmation or scheduled to be sent at a
					designated time or event.{' '}
					<a href="/letters/create">Try writing your first letter</a> with
					either guided or free write options.
				</p>
			</section>

			<section>
				<strong>3</strong>
				<h2>Build a MyLegacy Page</h2>
				<p>
					MyLegacy is a lasting memorial page that is published as a page to be
					shared, celebrated, or a place of reflection after confirmation of a
					passing. Write your own obituary to tell your story, organize rich
					photo and video galleries, add a timeline of your most memorable
					events, or designating a charitable cause in your name.{' '}
					<a href="/my-legacy">Start building a MyLegacy page</a> will help
					establish your place in time and provide an memorial of your life.
				</p>
			</section>

			<section>
				<strong>4</strong>
				<h2>Designate Legacy Contacts</h2>
				<p>
					You will need to designate up to 5 people to act as your Legacy
					Contacts after you pass. These individuals will be responsible for
					confirming your passing, which will activate your Last Farewell’s
					account. Once two legacy contacts have confirmed your passing, your
					letters with be sent and scheduled and your MyLegacy page will be
					published. Inviting and managing your Legacy Contacts is easy and
					seamless through the Last Farewell’s system, start by{' '}
					<a href="/trustees">adding your Legacy Contacts now</a>.
				</p>
			</section>
		</div>
	</Wrapper>
)
