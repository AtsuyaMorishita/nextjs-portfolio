import styled from "styled-components";
import SecTitle from "./SecTitle";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { mediaQuery } from "@/utils/breakpoints";

type Props = {
  isProfilePage?: boolean;
};

const SecProfile = ({ isProfilePage }: Props) => {
  return (
    <ProfileSection>
      <SecTitle title="PROFILE" />
      <ProfileWrap>
        <ProfileImageWrap>
          <ProfileImage src="/img/img_profile.jpg" fill alt="profile" />
        </ProfileImageWrap>
        <ProfileTitle>モリアツ</ProfileTitle>
        {!isProfilePage && (
          <ProfileText>
            ここはプロフィールセクション専用の説明です。ここはプロフィールセクション専用の説明です。
          </ProfileText>
        )}
        {isProfilePage && (
          <ProfileText>
            ここはプロフィールページ専用の説明です。ここはプロフィールページ専用の説明です。
          </ProfileText>
        )}
        <ProfileLinkWrap>
          <ProfileIconWrap>
            <ProfileIcon
              href={"https://github.com/AtsuyaMorishita"}
              target="_blank"
            >
              <GitHubIcon />
            </ProfileIcon>
            <ProfileIcon
              href={"https://twitter.com/atsuya_create"}
              target="_blank"
            >
              <TwitterIcon />
            </ProfileIcon>
          </ProfileIconWrap>
          {!isProfilePage && (
            <ProfileLinkBtn href="/profile">
              View More
              <Image
                src="/img/icon_link.png"
                width={24}
                height={24}
                alt="View More"
              />
            </ProfileLinkBtn>
          )}
        </ProfileLinkWrap>
      </ProfileWrap>
    </ProfileSection>
  );
};
export default SecProfile;

const ProfileSection = styled.section`
  margin-top: 60px;

  ${mediaQuery[1]} {
    margin-top: 0;
  }
`;

const ProfileWrap = styled.div`
  max-width: 280px;
  margin: 0 auto;
`;

const ProfileImageWrap = styled.figure`
  position: relative;
  width: 50%;
  height: 135px;
  margin: 10px auto 0;

  ${mediaQuery[1]} {
    width: 40%;
    height: 100px;
  }
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
`;

const ProfileTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 10px;

  ${mediaQuery[1]} {
    font-size: 2rem;
  }
`;

const ProfileText = styled.p`
  margin-top: 10px;

  ${mediaQuery[1]} {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProfileLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ProfileIconWrap = styled.div`
  display: flex;
`;

const ProfileIcon = styled(Link)`
  &:first-child {
    margin-right: 10px;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

const ProfileLinkBtn = styled(Link)`
  display: flex;
  img {
    margin-left: 5px;
  }
`;
