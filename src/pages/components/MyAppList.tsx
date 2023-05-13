import Image from "next/image";
import SecTitle from "./SecTitle";
import styled from "styled-components";

const MyAppList = ({ myApp }: any) => {
  return (
    <>
      <SecTitle title="MYAPP" />
      <ul>
        {myApp.map((elem: any) => (
          <li key={elem.id}>
            <ImageWrap>
              <ImageItem src={elem.img.url} fill alt={elem.title} />
            </ImageWrap>
            <h2>{elem.title}</h2>
            <a href={elem.gitUrl} target="_blank">
              gitのURL
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html: `${elem.desc}`,
              }}
            ></div>
            <ul>
              {elem.tech.map((elem: any, index: number) => (
                <li key={elem.index}>{elem.tech_name}</li>
              ))}
            </ul>
            <a href={elem.link} target="_blank">
              View More
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MyAppList;

const ImageWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 70%;
`;

const ImageItem = styled(Image)`
  object-fit: contain;
`;
