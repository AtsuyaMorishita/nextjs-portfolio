import styled from "styled-components";
import SecTitle from "./SecTitle";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { mediaQuery } from "@/utils/breakpoints";

const SecProfile = () => {
  return (
    <ProfileSection>
      {/* <SecTitle title="PROFILE" /> */}
      <ProfileWrap>
        <ProfileImageWrap>
          <ProfileImage src="/img/img_profile.jpg" fill alt="profile" />
        </ProfileImageWrap>
        <ProfileTitle>モリアツ</ProfileTitle>
        <ProfileText>
          愛知県出身。現在は山口県のWeb制作会社に勤務。
          <br />
          Next.jsなどモダンな技術を使ったWebアプリ開発に興味があります。
          <br />
          23年の夏までに東京に転職予定です。
        </ProfileText>
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
          <ProfileLinkBtn href="/profile" scroll={false}>
            View More
            <Image
              src="/img/icon_link.png"
              width={24}
              height={24}
              alt="View More"
            />
          </ProfileLinkBtn>
        </ProfileLinkWrap>
      </ProfileWrap>
    </ProfileSection>
  );
};
export default SecProfile;

const ProfileSection = styled.section`
  margin-top: 60px;
`;

const ProfileWrap = styled.div`
  max-width: 280px;
  margin: 0 auto;
`;

const ProfileImageWrap = styled.figure`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 10px auto 0;

  ${mediaQuery[1]} {
    width: 120px;
    height: 120px;
  }
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 10px;

  ${mediaQuery[1]} {
    font-size: 1.8rem;
  }
`;

const ProfileText = styled.p`
  margin-top: 10px;

  ${mediaQuery[1]} {
    /* width: 85%; */
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProfileLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
