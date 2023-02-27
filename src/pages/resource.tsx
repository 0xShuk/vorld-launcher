import React from "react";
import styled from "@emotion/styled";
import { FC } from "react";
import { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

const Resources: FC = () => {
	const wallet = useWallet();

  return (
    <RootWrapperResources>
      <Rectangle1 />
      <Footer>
        <_21
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74862579-9995-4898-b494-e0fb149d2964"
          alt="image of _21"
        />
        <Label>GRIZZLYTHON VERSION V0.1</Label>
      </Footer>
      <Header>
        <_11
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae10084d-4993-494a-94d2-7d1bdb1cff47"
          alt="image of _11"
        />
		<HeaderOptions>
			{
				wallet.publicKey ?
				<HeaderOption className={styles.walletButtonsResourceLogged}>
            		<WalletMultiButtonDynamic />
        		</HeaderOption>

				: ""
			}
			<HeaderOption className={styles.selectedOption}>CREATE NEW GAME</HeaderOption>
			<HeaderOption>GAMES</HeaderOption>
			<HeaderOption>TREASURY</HeaderOption>
			<HeaderOption>ACCOUNT</HeaderOption>
			<HeaderOption>
				<Vector xmlns="http://www.w3.org/2000/svg">
				<path
					fill="white"
					d="M37.5 29.3667L37.5 33.5333L0 33.5333L0 29.3667L37.5 29.3667ZM30.0083 0L39.5833 9.575L30.0083 19.15L27.0625 16.2042L33.6917 9.575L27.0625 2.94583L30.0083 0ZM18.75 14.7833L18.75 18.95L0 18.95L0 14.7833L18.75 14.7833ZM18.75 0.2L18.75 4.36667L0 4.36667L0 0.2L18.75 0.2Z"
				/>
				</Vector>
      		</HeaderOption>
		</HeaderOptions>
      </Header>

	
		{wallet.publicKey ?


		<LOGGED_WRAPPER>
			<MainContent>
				<ProjectResources>PROJECT RESOURCES</ProjectResources>

				<SideNav>
					<Rectangle3 />
					<IconAndLabel>
						<InfoHexagon>
						<Icon_0001
							src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27fad6e3-3ba1-4c44-9957-cb8c9a012261"
							alt="image of Icon"
						/>
						</InfoHexagon>
					</IconAndLabel>
					<IconAndLabel>
						<Package>
							<Icon_0001
							src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64827f12-5c02-4618-903b-4d6aacc137e4"
							alt="image of Icon"
							/>
							<Icon_0002
							src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63af7065-4a28-4c59-9d68-909efc3d586c"
							alt="image of Icon"
							/>
						</Package>
					</IconAndLabel>
					<IconAndLabel>
						<CoinsSwap02>
							<Icon
							src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa70494c-0139-4290-b9f8-25b35dd17f88"
							alt="icon"
							/>
						</CoinsSwap02>
					</IconAndLabel>
					<IconAndLabel>
						<BarLineChart>
							<Icon_0004
							src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4a2f932-1525-4a5a-8a81-e5e3706f39a1"
							alt="image of Icon"
							/>
						</BarLineChart>
					</IconAndLabel>
				</SideNav>
				<Avatar>
					<Ellipse1
					src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae6de30b-44b8-4cfc-8cd6-b93de3bcb52c"
					alt="image of Ellipse1"
					/>
				</Avatar>
				<Group5>
					<ProjectName>UNIQUE ID</ProjectName>
					<ProjectName>RESOURCE</ProjectName>
					<ProjectName>QUANTITY</ProjectName>
					<ProjectName>TYPE</ProjectName>
					<ProjectName>BUFFER WALLET</ProjectName>
					<ProjectName>ACCOUNT ADDRESS</ProjectName>
				</Group5>
				<Rectangle10 />
			</MainContent>
		<Pagination>
        <Frame10>
          <SolidCheveronLeft
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1798a997-4b4b-483b-87ba-8a77a745f705"
            alt="icon"
          />
        </Frame10>
        <Frame9>
          <Frame1>
            <_1>1</_1>
          </Frame1>
          <Frame2>
            <_2>2</_2>
          </Frame2>
        </Frame9>
        <Frame11>
          <SolidCheveronRight
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23e01517-19f6-4f24-929b-a81221aedd8e"
            alt="icon"
          />
        </Frame11>
      </Pagination>
      
      <Toggle>
        <Rectangle1_0001 />
        <Off>Off</Off>
        <OutlineMoon>
          <Icon_0005
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed495809-1e65-466b-b32e-684c55747c2b"
            alt="image of Icon"
          />
        </OutlineMoon>
      </Toggle>
	  <Rectangle4_0001 />
      <ItemList>
        <ProjectName2>
			UUID 1
          	<CheckboxIcon
				src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b82629ce-8ab6-42b1-b8aa-87b8a7e3a371"
				alt="icon"
          	/>
		</ProjectName2>
		<Line2 />
		<ProjectName2>RESOURCE 1</ProjectName2>
		<Line2 />
		<ProjectName2>1,000,000,000</ProjectName2>
		<Line2 />
		<ProjectName2>FT</ProjectName2>
		<Line2 />
		<ProjectName2>RESOURCE DEPLOYER ACC</ProjectName2>
		<Line2 />
		<ProjectName2>MINT ACCOUNT ADDRESS</ProjectName2>
      </ItemList>
      
    	<a href="add"><AddButton>
        <GenerateUuidButton>
          <Rectangle8 />
        </GenerateUuidButton>
        <PlusCircle>
          <Icon
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a47744f-0f0c-4073-959c-80cfcaddda9e"
            alt="icon"
          />
        </PlusCircle>
        <Add>ADD</Add>
      </AddButton></a>
      <AddButton_0001>
        <GenerateUuidButton>
          <Rectangle8 />
        </GenerateUuidButton>
        <PlusCircle>
          <Icon
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69d1d473-d226-49f0-84e2-af0481a7d62e"
            alt="icon"
          />
        </PlusCircle>
        <Delete>DELETE</Delete>
      </AddButton_0001>
      <AddButton_0002>
        <GenerateUuidButton>
          <Rectangle8 />
        </GenerateUuidButton>
        <PlusCircle>
          <Icon
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/052a0c29-9d98-462e-a4c3-734f36a12b45"
            alt="icon"
          />
        </PlusCircle>
        <Modify>MODIFY</Modify>
      </AddButton_0002>
		</LOGGED_WRAPPER>
		: 
		<div className={styles.walletButtonsResource}>
            <WalletMultiButtonDynamic />
        </div>
		}
    </RootWrapperResources>
  );
}

const RootWrapperResources = styled.div`
	min-height: 100vh;
	background-color: black;
	position: relative;
`;

const Rectangle1 = styled.div`
	width: 92%;
	height: 100%;
	box-shadow: 8px 8px 40px  rgba(0, 0, 0, 0.31);
	background-color: rgb(38, 38, 38);
	border-radius: 20px;
	position: absolute;
	left: 4%;
	top: 138px;
`;

const LOGGED_WRAPPER = styled.div`
	width: 92%;
	height: 100%;
	position: absolute;
	left: 4%;
`;

const MainContent = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 4%;
	top: 176px;
`;

const Rectangle10 = styled.div`
	width: 92%;
	height: 543px;
	box-shadow: 8px 8px 40px  rgba(0, 0, 0, 0.31);
	background-color: rgb(34, 34, 34);
	border-radius: 20px;
	position: absolute;
	left: 32px;
	top: 160px;
`;

const Pagination = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	gap: 4px;
	box-sizing: border-box;
	padding: 4px;
	position: absolute;
	left: 865px;
	top: 874px;
	width: 352px;
	height: 44px;
`;

const Frame10 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	gap: 10px;
	box-sizing: border-box;
	padding: 8px 10px;
`;

const SolidCheveronLeft = styled.img`
	width: 20px;
	height: 20px;
	object-fit: cover;
`;

const Frame9 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	box-sizing: border-box;
`;

const Frame1 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 10px;
	border: solid 1px rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	width: 32px;
	background-color: rgb(18, 18, 18);
	box-sizing: border-box;
	padding: 8px 16px;
`;

const _1 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	text-align: left;
`;

const Frame2 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 10px;
	width: 32px;
	box-sizing: border-box;
	padding: 8px 16px;
`;

const _2 = styled.span`
	color: rgb(121, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	text-align: left;
`;

const NaN_0001 = styled.span`
	color: rgb(121, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	text-align: left;
`;

const Frame11 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 10px;
	box-sizing: border-box;
	padding: 8px 10px;
`;

const SolidCheveronRight = styled.img`
	width: 20px;
	height: 20px;
	object-fit: cover;
`;

const SideNav = styled.div`
	width: 113px;
	height: 480px;
	left: -8%;
	top: 72px;
	position: relative;

`;

const Avatar = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	gap: 8px;
	box-sizing: border-box;
	position: absolute;
	left: -7%;
	top: 660px;
	width: 48px;
	height: 48px;
`;

const Rectangle3 = styled.div`
	width: 113px;
	height: 480px;
	box-shadow: 8px 8px 40px  rgba(0, 0, 0, 0.31);
	background-color: rgb(0, 240, 255);
	border-radius: 20px;
	position: relative;
	left: 113px;
	top: 450px;
	transform: rotate(-180deg);
	transform-origin: top left;
`;

const IconAndLabel = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	box-sizing: border-box;
	position: absolute;
	left: 0px;
	top: 48px;
	width: 113px;
	height: 76px;
	cursor: pointer;
`;

const CoinsSwap02 = styled.div`
	width: 48px;
	height: 48px;
	overflow: hidden;
	position: relative;
	top: 192px;
`;

const Icon = styled.img`
	object-fit: cover;
	position: absolute;
	left: 4px;
	top: 4px;
	right: 4px;
	bottom: 4px;
`;

const Package = styled.div`
	width: 48px;
	height: 48px;
	overflow: hidden;
	position: relative;
	top: 96px;
	box-shadow: 0px 0px 40px  rgba(0, 0, 0, 0.6);
`;

const Icon_0001 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 6px;
	top: 4px;
	right: 6px;
	bottom: 4px;
`;

const Icon_0002 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 15px;
	top: 9px;
	right: 15px;
	bottom: 29px;
`;


const InfoHexagon = styled.div`
	width: 48px;
	height: 48px;
	overflow: hidden;
	position: relative;
`;


const Footer = styled.div`
	width: 1967px;
	height: 646px;
	position: absolute;
	left: -47px;
	top: 434px;
`;

const _21 = styled.img`
	width: 596px;
	height: 646px;
	object-fit: cover;
	position: absolute;
	left: calc((calc((50% + 686px)) - 298px));
	top: calc((calc((50% + 0px)) - 323px));
`;

const Label = styled.span`
	color: rgb(166, 166, 166);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: center;
	width: 429px;
	position: absolute;
	left: 0px;
	top: 612px;
`;

const Header = styled.div`
	width: 100%;
	height: 351px;
	position: absolute;
	left: 0px;
	top: -105px;
`;

const _11 = styled.img`
	width: 354px;
	height: 351px;
	object-fit: cover;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const HeaderOptions = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Impact, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	top: 151px;
	right: 0%;
	cursor: pointer;
	z-index: 400;
`;

const HeaderOption = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Impact, sans-serif;
	font-weight: 400;
	margin-right: 16px;
	padding: 40px 20px;
`;

// const Games = styled.span`
// 	color: white;
// 	text-overflow: ellipsis;
// 	font-size: 24px;
// 	font-family: Impact, sans-serif;
// 	font-weight: 400;
// 	text-align: left;
// 	position: absolute;
// 	left: 1376px;
// 	top: 151px;
// `;

// const Treasury = styled.span`
// 	color: white;
// 	text-overflow: ellipsis;
// 	font-size: 24px;
// 	font-family: Impact, sans-serif;
// 	font-weight: 400;
// 	text-align: left;
// 	position: absolute;
// 	left: 1494px;
// 	top: 151px;
// `;

// const Account = styled.span`
// 	color: white;
// 	text-overflow: ellipsis;
// 	font-size: 24px;
// 	font-family: Impact, sans-serif;
// 	font-weight: 400;
// 	text-align: left;
// 	position: absolute;
// 	left: 1643px;
// 	top: 151px;
// `;

const Vector = styled.svg`
	width: 40px;
	height: 34px;
	position: relative;
	left: 6px;
	top: 8px;
	right: 4px;
	bottom: 8px;
`;

const BarLineChart = styled.div`
	width: 48px;
	height: 48px;
	overflow: hidden;
	position: relative;
	z-index: 2;
	top: 288px;
`;

const Icon_0004 = styled.img`
	object-fit: cover;
	position: relative;
	left: 5px;
	top: 6px;
	right: 5px;
	bottom: 8px;
`;

const Group5 = styled.div`
	position: absolute;
	display: flex;
	left: 0px;
	justify-content: space-around;
	right: 0px;
	top: 96px;
	z-index: 50;
	margin-right: 6%;
	margin-left: 2%; 
	text-overflow: ellipsis;
`;


const ProjectName = styled.div`
	display: inline;
	color: rgb(31, 241, 254);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
`;

const ProjectResources = styled.span`
	color: rgb(0, 255, 224);
	text-overflow: ellipsis;
	font-size: 30px;
	font-family: "IBM Plex Sans Condensed", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
`;


const Ellipse1 = styled.img`
	width: 48px;
	height: 48px;
	object-fit: cover;
`;

const Toggle = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	gap: 4px;
	border: solid 1px rgb(48, 48, 48);
	border-radius: 4px;
	background-color: rgb(25, 25, 25);
	box-sizing: border-box;
	padding-bottom: 2px;
	padding-top: 2px;
	padding-left: 2px;
	padding-right: 4px;
	position: absolute;
	left: 932px;
	top: 1046px;
	width: 56px;
	height: 20px;
`;

const Rectangle1_0001 = styled.div`
	width: 16px;
	height: 16px;
	background-color: white;
	border: solid 1px white;
	border-radius: 2px;
`;

const Off = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 12px;
	text-align: left;
`;

const OutlineMoon = styled.div`
	width: 10px;
	height: 10px;
	overflow: hidden;
	position: relative;
`;

const Icon_0005 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 1px;
	top: 2px;
	right: 2px;
	bottom: 1px;
`;

const ItemList = styled.div`
	width: 90%;
	height: 48px;
	position: absolute;
	left: 6%;
	top: 374px;
	display: flex;
	justify-content: space-around;
	right: 0px;
	z-index: 50;
	margin-right: 6%;
	margin-left: 2%; 
	text-overflow: ellipsis;
`;

const Rectangle4_0001 = styled.div`
	width: 90%;
	height: 40px;
	background-color: white;
	border-radius: 20px;
	position: absolute;
	left: 97%;
	top: 406px;
	transform: rotate(-180deg);
	transform-origin: top left;
`;

const ProjectName2 = styled.div`
	display: inline;
	color: rgb(49, 49, 49);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
`;

const Resource1 = styled.span`
	color: rgb(49, 49, 49);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const ProjectName_0008 = styled.div`
	width: 88px;
	height: 20px;
	position: absolute;
	left: 43px;
	top: 13px;
`;

const Uuid1 = styled.span`
	color: rgb(49, 49, 49);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 35px;
	top: 0px;
`;

const CheckboxIcon = styled.img`
	width: 16px;
	height: 16px;
	object-fit: cover;
	position: absolute;
	left: 0px;
	top: 2px;
`;

const ProjectName_0009 = styled.div`
	width: 110px;
	height: 20px;
	position: absolute;
	left: 542px;
	top: 13px;
`;

const _1000000000 = styled.span`
	color: rgb(49, 49, 49);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const ProjectName_0010 = styled.div`
	width: 19px;
	height: 20px;
	position: absolute;
	left: 725px;
	top: 13px;
`;

const Ft = styled.span`
	color: rgb(49, 49, 49);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: center;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const ProjectName_0011 = styled.div`
	width: 199px;
	height: 20px;
	position: absolute;
	left: 804px;
	top: 14px;
`;

const ResourceDeployerAcc = styled.span`
	color: rgb(49, 49, 49);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: center;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const ProjectName_0012 = styled.div`
	width: 190px;
	height: 20px;
	position: absolute;
	left: 1153px;
	top: 13px;
`;

const MintAccountAddress = styled.span`
	color: rgb(49, 49, 49);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: center;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Line2 = styled.div`
	width: 20px;
	height: 0px;
	border-top: solid 1px rgb(181, 181, 181);
	transform: rotate(-270deg);
	transform-origin: top left;
`;

const AddButton = styled.div`
	width: 152px;
	height: 53px;
	position: absolute;
	left: 1190px;
	top: 941px;
	cursor: pointer;
`;

const GenerateUuidButton = styled.div`
	width: 152px;
	height: 53px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Rectangle8 = styled.div`
	width: 152px;
	height: 53px;
	box-shadow: 4px 4px 4px  rgba(0, 0, 0, 0.25);
	background-color: black;
	border-radius: 24px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const PlusCircle = styled.div`
	width: 48px;
	height: 48px;
	overflow: hidden;
	position: absolute;
	left: 2px;
	top: 3px;
`;

const Add = styled.span`
	color: rgb(31, 241, 254);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 69px;
	top: 17px;
`;

const AddButton_0001 = styled.div`
	width: 152px;
	height: 53px;
	position: absolute;
	left: 1391px;
	top: 941px;
`;

const Delete = styled.span`
	color: rgb(31, 241, 254);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 55px;
	top: 17px;
`;

const AddButton_0002 = styled.div`
	width: 152px;
	height: 53px;
	position: absolute;
	left: 1592px;
	top: 941px;
`;

const Modify = styled.span`
	color: rgb(31, 241, 254);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 53px;
	top: 17px;
`;

export default Resources;