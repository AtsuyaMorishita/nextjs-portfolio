import { FormContext } from "@/context/FormContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "../../components/Layout";
import SecTitle from "../../components/SecTitle";
import styled from "styled-components";
import { COLOR, FONT } from "@/styles/variable";
import { Meta } from "../../components/Meta";
import { META_TITLE } from "@/data/meta";
import { CircularProgress } from "@mui/material";
import PageAnimeWrap from "@/components/PageAnimeWrap";

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
  const [isLoading, setIsLoading] = useState(false);

  const newtSpaceId = process.env.NEXT_PUBLIC_NEWT_SPACE_ID;
  const newtApiKey = process.env.NEXT_PUBLIC_NEWT_FORM_API;

  const onSubmit: SubmitHandler<Inputs> = async () => {
    setIsLoading(true);
    //newtにフォームを送信する
    await fetch(`https://${newtSpaceId}.form.newt.so/v1/${newtApiKey}`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    //ページ遷移
    router.push("complete");
  };

  return (
    <>
      <Meta title={META_TITLE.CONTACT} />
      <PageAnimeWrap>
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

            {!isLoading ? (
              <FormButtonWrap>
                <FormButton type="submit">送信する</FormButton>
              </FormButtonWrap>
            ) : (
              <LoadingIconWrap>
                <CircularProgress />
              </LoadingIconWrap>
            )}

            <FormBackButton href={"/contact"}>←内容を修正する</FormBackButton>
          </FormList>
        </Layout>
      </PageAnimeWrap>
    </>
  );
}

const FormList = styled.form`
  padding: 0 30px;
  margin: 20px auto 50px;
  max-width: 500px;
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
  margin-top: 50px;
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
  cursor: pointer;
`;

const FormBackButton = styled(Link)`
  width: 250px;
  max-width: 100%;
  display: block;
  margin: 20px auto 0;
  text-align: left;
`;

const LoadingIconWrap = styled.div`
  text-align: center;
  margin-top: 50px;
`;
