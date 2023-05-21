import Link from "next/link";
import Layout from "../components/Layout";
import SecTitle from "../components/SecTitle";
import styled from "styled-components";
import { COLOR, FONT } from "@/styles/variable";
import { Meta } from "../components/Meta";
import { META_TITLE } from "@/data/meta";

export default function Complete() {
  return (
    <>
      <Meta title={META_TITLE.CONTACT} />
      <Layout isContact>
        <SecTitle title="CONTACT" />
        <FormCompWrap>
          <FormCompText>
            お問い合わせありがとうございます！
            <br />
            2.3営業日以内にご連絡いたします。
          </FormCompText>
          <FormCompLinkWrap>
            <FormCompLink href={"/"}>TOPに戻る</FormCompLink>
          </FormCompLinkWrap>
        </FormCompWrap>
      </Layout>
    </>
  );
}

const FormCompWrap = styled.div`
  padding: 0 30px;
  margin: 20px auto 50px;
`;

const FormCompText = styled.p`
  text-align: center;
`;

const FormCompLinkWrap = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const FormCompLink = styled(Link)`
  display: inline-block;
  font-size: 1.4rem;
  background-color: ${COLOR.SECONDARY};
  border: 1px solid ${COLOR.SUBCOLOR};
  color: ${COLOR.BLACK};
  width: 250px;
  max-width: 100%;
  height: 48px;
  font-family: ${FONT.MAIN};
  text-align: center;
  line-height: 48px;
`;
