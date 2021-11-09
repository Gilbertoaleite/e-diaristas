/** @format */

import React from 'react';
import {
	FooterStyled,
	FooterContainer,
	FooterTitle,
	AppList,
} from './Footer.styles';
import { Typography, Box } from '@mui/material';

const Footer = () => {
	return (
		<FooterStyled>
			<FooterContainer>
				<Box sx={{ maxWidth: '400px' }}>
					<FooterTitle>Quem Somos</FooterTitle>
					<Typography variant={'body2'} sx={{ mt: '16px' }}>
						{' '}
						Esse Projeto foi feito como um site fictício, de procura de
						diaristas, e foi desenvolvido usando o React e para api foi
						ultilízado o Python com o Django.
					</Typography>
				</Box>
				<div>
					<FooterTitle>Baixe nossos aplicativos</FooterTitle>
					<AppList>
						<li>
							<a
								target={'_blank'}
								rel={'noopener noreferrer'}
								href={'https://www.linkedin.com/in/gilbertoaleite/'}
							>
								<img src={'/img/logos/app-store.png'} alt={'AppStore'} />
							</a>{' '}
						</li>
						<li>
							<a
								target={'_blank'}
								rel={'noopener noreferrer'}
								href={'https://github.com/Gilbertoaleite'}
							>
								<img src={'/img/logos/google-play.png'} alt={'GooglePlay'} />
							</a>
						</li>
					</AppList>
				</div>
			</FooterContainer>
		</FooterStyled>
	);
	``;
};

export default Footer;
