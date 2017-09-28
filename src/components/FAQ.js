import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'

export default class FAQ extends React.Component {
	render() {
		const Wrapper = styled.div`
			.Collapsible {
				padding: 5px;
				border: 1px solid lightgray;
				font-size: 26px;
				text-align: left;
				margin-bottom: 20px;
				@include mappy-query(phone-range) {
					font-size: 22px;
				}
			}

			.Collapsible__trigger:hover {
				cursor: pointer;
			}

			p {
				text-align: left;
				font-size: 20px;
			}

			section {
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

			.Collapsible__trigger {
				display: block;
				text-decoration: none;
				position: relative;
				border: 1px solid white;
				padding: 10px;

				&:after {
					font-family: 'FontAwesome';
					content: '\f107';
					position: absolute;
					right: 10px;
					top: 10px;
					display: block;
					transition: transform 300ms;
				}

				&.is-open {
					&:after {
						transform: rotateZ(180deg);
					}
				}

				&.is-disabled {
					opacity: 0.5;
					background-color: grey;
				}
			}
		`
		return (
			<Wrapper>
				<h1>Frequently Asked Questions</h1>
				<section className="question">
					<Collapsible trigger="Who can see my Last Letters?">
						<p>
							No one can see your letters until they are sent upon your passing.
							At that time they will be sent only to the person to whom they are
							addressed.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="How do letters get sent? Who will have access?">
						<p>
							Letters are sent after two of your Last Contacts confirm your
							death. Only the person to whom they are addressed gets the letter.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="Can I save a letter and come back to it if I don’t want to finish it now?">
						<p>
							Yes, your letters are saved periodically, and you will be warned
							if your letter has not been saved. You can always come back to it
							later after saving it.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="How do I schedule a letter to be sent on a specific date?">
						<p>
							Before you start writing, we ask you when you want to send your
							letter. You get to choose between it being sent when you pass
							away, on a special event like a birthday or graduation, or on a
							specific date that you choose.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="What is a Last Contact?">
						<p>
							The Last Contacts are the people (up to five) that you choose to
							be responsible for notifying Last Farewells of your death. As soon
							as three of your Last Contacts have confirmed your passing, Last
							Farewells will start setting in motion the events you've outlined.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="Can I change my Last Contacts?">
						<p>
							You can change legacy contacts at any time through your dashboard.
							You must have a minimum of three legacy contacts at any time.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="What if I don't know how to write a Self-Obituary?">
						<p>
							Feel free to check out our blog post on how to write your own
							obituary. It contains several helpful steps and resources that can
							help you as you write your Self-Obituary. Otherwise checkout our
							list of great Self-Obituaries that can serve as inspiration.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="Can I update my Memorial page?">
						<p>
							Yes. Your Memorial Page can be edited at any time. It will not be
							made public until your passing is confirmed by your Last Contacts.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="Where can I look for advice on preparing for death?">
						<p>
							Wrapping our minds around death can be one of the most challenging
							things in our lives. However, if we prepare for it by writing
							letters and creating your own legacy, we can, as J.K. Rowling
							said, "Welcome death as old friends.". Feel free to use our guided
							questions in the letter writing process or blog posts for guides
							on how to prepare for your passing in peace.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="How much does Last Farewells cost?">
						<p>
							Signing up is free, and most of Last Farewells features are free
							as well. If you'd like to write more than three letters, or record
							Video Letters, then you can upgrade to a Legacy account that costs
							a one time fee of $29. After this you'll have a Legacy Account
							forever, as it's a one time, life-time upgrade.
						</p>
					</Collapsible>
				</section>
				<section className="question">
					<Collapsible trigger="How safe is my information?">
						<p>
							We take every step to ensure that your information is secure. We
							do not share your data with third parties and do not use cookies
							on our site.
						</p>
					</Collapsible>
				</section>
			</Wrapper>
		)
	}
}
