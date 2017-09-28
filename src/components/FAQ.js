import React from 'react'
import styled from 'styled-components'

export default class FAQ extends React.Component {
	render() {
		const Wrapper = styled.div`
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
		return (
			<Wrapper>
				<h1>Frequently Asked Questions</h1>
				<section className="question">
					<h2>Who Can See My Letters?</h2>
					<p>
						No one can see your letters until they are sent upon your passing.
						At that time they will be sent only to the person to whom they are
						addressed.
					</p>
				</section>
				<section className="question">
					<h2>How do letters get sent? Who will have access?</h2>
					<p>
						Letters are sent after two of your Last Contacts confirm your death.
						Only the person to whom they are addressed gets the letter.
					</p>
				</section>
				<section className="question">
					<h2>
						Can I save a letter and come back to it if I don’t want to finish it
						now?
					</h2>
					<p>
						Yes, your letters are saved periodically, and you will be warned if
						your letter has not been saved. You can always come back to it later
						after saving it.
					</p>
				</section>
				<section className="question">
					<h2>How do I schedule a letter to be sent on a specific date?</h2>
					<p>
						Before you start writing, we ask you when you want to send your
						letter. You get to choose between it being sent when you pass away,
						on a special event like a birthday or graduation, or on a specific
						date that you choose.
					</p>
				</section>
				<section className="question">
					<h2>What is a Last Contact?</h2>
					<p>
						The Last Contacts are the people (up to five) that you choose to be
						responsible for notifying Last Farewells of your death. As soon as
						three of your Last Contacts have confirmed your passing, Last
						Farewells will start setting in motion the events you've outlined.
					</p>
				</section>
				<section className="question">
					<h2>What if I want to change legacy contacts?</h2>
					<p>
						You can change legacy contacts at any time through your dashboard.
						You must have a minimum of three legacy contacts at any time.
					</p>
				</section>
				<section className="question">
					<h2>What if I don’t know how to write a self-obituary?</h2>
					<p>
						Feel free to check out our blog post on how to write your own obituary. It contains several helpful steps and resources that can help you as you write your Self-Obituary. Otherwise checkout our list of great Self-Obituaries that can serve as inspiration.
					</p>
				</section>
				<section className="question">
					<h2>What if I don’t know how to write a self-obituary?</h2>
					<p>
						Feel free to check out our blog post on how to write your own obituary. It contains several helpful steps and resources that can help you as you write your Self-Obituary. Otherwise checkout our list of great Self-Obituaries that can serve as inspiration.
					</p>
				</section>
				<section className="question">
					<h2>Can I update my Memorial page?</h2>
					<p>
						Yes. Your Memorial Page can be edited at any time. It will not be made public until
					</p>
				</section>
			</Wrapper>
		)
	}
}
