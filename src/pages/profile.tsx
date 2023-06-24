import SecTitle from "../components/SecTitle";
import Layout from "../components/Layout";
import styled from "styled-components";
import { COLOR } from "@/styles/variable";
import Image from "next/image";
import { mediaQuery } from "@/utils/breakpoints";
import { META_TITLE } from "@/data/meta";
import { Meta } from "../components/Meta";
import PageAnimeWrap from "@/components/PageAnimeWrap";

export default function Profile() {
  return (
    <>
      <Meta title={META_TITLE.PROFILE} />
      <PageAnimeWrap>
        <Layout isProfile>
          <main>
            <SecTitle title="PROFILE" />
            <ProfileLead>
              <ProfileLeadImage>
                <ProfileLeadImageItem src="/img/img_profile.jpg" alt="" fill />
              </ProfileLeadImage>
              <ProfileLeadInfo>
                <ProfileLeadName>モリアツ</ProfileLeadName>
                <ProfileLeadText>
                  愛知県出身。現在は山口県のWeb制作会社に勤務。
                  <br />
                  Next.jsなどモダンな技術を使ったWebアプリ開発に興味があります。
                  <br />
                  23年の夏までに東京に転職を目指しています。
                </ProfileLeadText>
              </ProfileLeadInfo>
            </ProfileLead>
            <ProfileList>
              <ProfileItem>
                <ProfileInfoTitle>SKILL</ProfileInfoTitle>
                <ProfileInfoText>
                  <ProfileInfoTextSubTitle>
                    【言語 / フレームワーク】
                  </ProfileInfoTextSubTitle>
                  HTML（EJS） / CSS（SCSS） / Javascript（jQuery） / TypeScript
                  / React（Next.js）
                  <ProfileInfoTextSubTitle>【その他】</ProfileInfoTextSubTitle>
                  WordPress / microCMS / Shopify / Git / Github / Gulp / WebPack
                  / Vite / Firebase(CloudFirestore , Authentication) / Vercel /
                  Netlify
                </ProfileInfoText>
              </ProfileItem>

              <ProfileItem>
                <ProfileInfoTitle>HISTORY</ProfileInfoTitle>
                <ProfileInfoText>
                  愛知県の私立大学を卒業後、商業(ショッピングモール)デベロッパーの業界にて、テナントの売上管理・改善提案や契約関連業務などに従事。
                  <br />
                  在職中は宅地建物取引士の資格も取得。
                  <br />
                  一方でWeb制作の仕事に興味を持ち、独学でのコーディングの学習を得て現在の会社に転職。
                  <br />
                  約2年間コーダーとしてECサイトやWebサイトのコーディング/実装を行う。
                  <br />
                  現在はNext.jsなどモダンな技術やアプリ開発に興味を持ち、都内でフロントエンドエンジニアになるため転職活動中。
                </ProfileInfoText>
              </ProfileItem>

              <ProfileItem>
                <ProfileInfoTitle>HOBBY</ProfileInfoTitle>
                <ProfileInfoText>
                  スポーツをするのも見るのも好きです。特に小中野球をやっていたのでプロ野球が好きで、WBCは有給使って見るほど熱狂していました。
                  <br />
                  最近は週末テニススクールに通っていて、初挑戦の競技ですがどハマり中。
                  <br />
                  海外旅行も好きで、学生時代は約1ヶ月東南アジアにバックパッカーをしたり、一人で台湾に行ったりしていました。(社会人になって行けてませんが、、)
                  <br />
                  好奇心旺盛な性格なので、基本的に新しいことをしたり、新しい場所に行ったりすることは全般好きです。
                </ProfileInfoText>
              </ProfileItem>
            </ProfileList>
          </main>
        </Layout>
      </PageAnimeWrap>
    </>
  );
}

const ProfileLead = styled.div`
  padding: 0 30px;
  margin-top: 30px;

  ${mediaQuery[0]} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProfileLeadInfo = styled.div`
  ${mediaQuery[0]} {
    /* width: calc(100% - 200px); */
  }
`;

const ProfileLeadText = styled.p`
  margin: 10px auto 0;
  max-width: 450px;

  ${mediaQuery[0]} {
    margin: 5px auto 0;
    font-size: 1.6rem;
  }
`;
const ProfileLeadImage = styled.figure`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  ${mediaQuery[0]} {
    margin: 0;
    margin-right: 30px;
  }
`;
const ProfileLeadImageItem = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;
const ProfileLeadName = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-top: 10px;
  ${mediaQuery[0]} {
    text-align: left;
  }
`;

const ProfileList = styled.ul`
  display: grid;
  gap: 45px;
  padding: 0 40px;
  margin: 60px auto 0;
  max-width: 800px;
`;

const ProfileItem = styled.li``;

const ProfileInfoTitle = styled.span`
  display: inline-block;
  font-size: 1.6rem;
  background-color: ${COLOR.SECONDARY};
  padding: 2px 20px;
  font-weight: bold;
  ${mediaQuery[0]} {
    font-size: 1.8rem;
  }
`;

const ProfileInfoText = styled.p`
  font-size: 1.4rem;
  margin-top: 10px;
  ${mediaQuery[0]} {
    font-size: 1.6rem;
  }
`;

const ProfileInfoTextSubTitle = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.4rem;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
  ${mediaQuery[0]} {
    font-size: 1.6rem;
  }
`;
