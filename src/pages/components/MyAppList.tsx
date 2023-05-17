import Image from "next/image";
import SecTitle from "./SecTitle";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import { COLOR } from "@/styles/variable";
import Link from "next/link";

const MyAppList = ({ myApp }: any) => {
  return (
    <>
      <SecTitle title="MYAPP" />
      <AppList>
        {myApp.map((elem: any) => (
          <AppItem key={elem.id}>
            <ImageWrap>
              <ImageItem src={elem.img.url} fill alt={elem.title} />
            </ImageWrap>
            <AppInfoWrap>
              <AppTitleWrap>
                <AppTitle>{elem.title}</AppTitle>
                <AppGitIcon href={elem.gitUrl} target="_blank">
                  <GitHubIcon />
                </AppGitIcon>
              </AppTitleWrap>
              <AppDesc
                dangerouslySetInnerHTML={{
                  __html: `${elem.desc}`,
                }}
              ></AppDesc>
              <TechList>
                {elem.tech.map((elem: any, index: number) => (
                  <TechItem key={elem.index}>{elem.tech_name}</TechItem>
                ))}
              </TechList>
              <AppLinkWrap>
                <AppLinkItem>
                  <AppLink href={elem.link} target="_blank">
                    View More
                    <Image
                      src="/img/icon_link.png"
                      width={24}
                      height={24}
                      alt="View More"
                    />
                  </AppLink>
                </AppLinkItem>
              </AppLinkWrap>
            </AppInfoWrap>
          </AppItem>
        ))}
      </AppList>
    </>
  );
};
export default MyAppList;

const AppList = styled.ul`
  margin-top: 10px;
`;

const AppItem = styled.li`
  max-width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid ${COLOR.SUBCOLOR};
  padding-bottom: 30px;
  &:not(:first-child) {
    padding-top: 30px;
  }
`;

const ImageWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 70%;
`;

const ImageItem = styled(Image)`
  object-fit: contain;
  border: 1px solid ${COLOR.SECONDARY};
`;

const AppInfoWrap = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const AppTitle = styled.h2`
  font-size: 1.6rem;
`;

const AppGitIcon = styled(Link)`
  svg {
    width: 25px;
    height: 25px;
  }
`;

const AppTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const AppDesc = styled.div`
  margin-top: 10px;
  p {
    font-size: 1.2rem;
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;

const TechItem = styled.li`
  background-color: ${COLOR.SECONDARY};
  font-size: 1.2rem;
  padding: 0.5em;
  margin-right: 0.5em;
  margin-top: 0.5em;
`;

const AppLinkWrap = styled.div`
  text-align: right;
  margin-top: 15px;
`;

const AppLinkItem = styled.div`
  display: inline-block;
`;

const AppLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    margin-left: 5px;
  }
`;
