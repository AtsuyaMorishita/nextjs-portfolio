import { FormContext } from "@/context/FormContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "../components/Layout";
import SecTitle from "../components/SecTitle";
import styled from "styled-components";
import { COLOR, FONT } from "@/styles/variable";

type Inputs = {
  name: string;
  nameKana: string;
  email: string;
  content: string;
};

export default function Confirm() {
  const { handleSubmit } = useForm<Inputs>();
  const [formData, setFormData] = useContext(FormContext);
  const router = useRouter();

  const newtSpaceId = process.env.NEXT_PUBLIC_NEWT_SPACE_ID;
  const newtApiKey = process.env.NEXT_PUBLIC_NEWT_FORM_API;

  const onSubmit: SubmitHandler<Inputs> = async () => {
    //newtにフォームを送信する
    await fetch(`https://${newtSpaceId}.form.newt.so/v1/${newtApiKey}`, {
      method: "POST",
      body: JSON.stringify(formData), // JSON文字列化して送信
      headers: {
        "Content-Type": "application/json", // JSON形式でデータを送信することをサーバーに伝える
        Accept: "application/json", // レスポンスをJSONで受け取る
      },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    //ページ遷移
    router.push("complete");

    //データのリセット
    setFormData({});
  };

  return (
    <Layout isContact>
      <SecTitle title="CONTACT" />
      <FormList onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <FormLabel>名前</FormLabel>
          <FormText>{formData.name}</FormText>
        </FormItem>

        <FormItem>
          <FormLabel>名前(カナ)</FormLabel>
          <FormText>{formData.nameKana}</FormText>
        </FormItem>

        <FormItem>
          <FormLabel>メールアドレス</FormLabel>
          <FormText>{formData.email}</FormText>
        </FormItem>

        <FormItem>
          <FormLabel>お問い合わせ内容</FormLabel>
          <FormPre>{formData.content}</FormPre>
        </FormItem>

        <FormButtonWrap>
          <FormButton type="submit">送信する</FormButton>
        </FormButtonWrap>

        <FormBackButton href={"/contact"}>←内容を修正する</FormBackButton>
      </FormList>
    </Layout>
  );
}

const FormList = styled.form`
  padding: 0 30px;
  margin: 20px auto 50px;
`;

const FormItem = styled.div`
  &:not(:first-of-type) {
    margin-top: 30px;
  }
`;

const FormLabel = styled.p`
  display: block;
  margin-bottom: 5px;
  border-bottom: 1px solid ${COLOR.SUBCOLOR};
`;

const FormText = styled.p`
  padding-top: 10px;
`;

const FormPre = styled.pre`
  white-space: pre-wrap; /* テキストを折り返す */
  word-break: break-word; /* 長い単語を折り返す */
  font-family: ${FONT.MAIN};
`;

const FormButtonWrap = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const FormButton = styled.button`
  display: inline-block;
  font-size: 1.4rem;
  background-color: ${COLOR.SECONDARY};
  border: 1px solid ${COLOR.SUBCOLOR};
  color: ${COLOR.BLACK};
  width: 250px;
  max-width: 100%;
  height: 48px;
  font-family: ${FONT.MAIN};
`;

const FormBackButton = styled(Link)`
  width: 250px;
  max-width: 100%;
  display: block;
  margin: 20px auto 0;
  text-align: left;
`;
