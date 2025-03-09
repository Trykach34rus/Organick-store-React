import Fb from '../../assets/ProgectFoto/Fb.svg'
import Insta from '../../assets/ProgectFoto/Insta.svg'
import Pintrest from '../../assets/ProgectFoto/Pintrest.svg'
import Twiter from '../../assets/ProgectFoto/Twiter.svg'
import st from './Footer.module.scss'

function Footer() {
	return (
		<div className={st.root}>
			<div className={st.contactUs}>
				<div className={st.contactUsInfo}>Contact Us</div>
				<div className={st.emailPhoneAddresContainer}>
					<div className={st.emailTitle}>Email</div>
					<div className={st.email}>needhelp@Organia.com</div>
					<div className={st.phoneTitle}>Phone</div>
					<div className={st.phone}>666 888 888</div>
					<div className={st.addressTitle}>Address</div>
					<div className={st.address}>88 road, borklyn street, USA</div>
				</div>
			</div>
			<div className={st.socialNetwork}>
				<div className={st.logoOrganickContainer}>Organick</div>
				<div className={st.logoOrganickDescription}>
					Simply dummy text of the printing and typesetting industry. Lorem
					Ipsum simply dummy text of the printing.
				</div>
				<div className={st.socialButtonsContainer}>
					<button className={st.instagrammButton}>
						<img src={Insta} />
					</button>
					<button className={st.faseBookButton}>
						<img src={Fb} />
					</button>
					<button className={st.XButton}>
						<img src={Pintrest} />
					</button>
					<button className={st.PButton}>
						<img src={Twiter} />
					</button>
				</div>
			</div>
			<div className={st.utilityPages}>
				<div className={st.utilityPagesTitle}>Utility Pages</div>
				<div className={st.utilityPagesDescription}>
					<div className={st.styleGuide}>Style Guide</div>
					<div className={st.notFound}>404 Not Found</div>
					<div className={st.passwordProtected}>Password Protected</div>
					<div className={st.licences}>Licences</div>
					<div className={st.changelog}>Changelog</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
