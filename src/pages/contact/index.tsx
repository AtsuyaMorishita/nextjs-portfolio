import { FormContext } from "@/context/FormContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import Layout from "../../components/Layout";
import SecTitle from "../../components/SecTitle";
import { COLOR, FONT } from "@/styles/variable";
import { Meta } from "../../components/Meta";
import { META_TITLE } from "@/data/meta";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  nameKana: string;
  email: string;
  content: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [formData, setFormData] = useContext(FormContext);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormData(data);
    router.push("/contact/confirm");
  };

  return (
    <>
      <Meta title={META_TITLE.CONTACT} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Layout isContact>
          <SecTitle title="CONTACT" />
          <FormList onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormLabel htmlFor="name">名前</FormLabel>
              <FormInput
                id="name"
                defaultValue={formData.name}
                {...register("name", { required: true })}
              />
              {errors.name && <span>名前を入力してください。</span>}
            </FormItem>

            <FormItem>
              <FormLabel htmlFor="nameKana">名前(カナ)</FormLabel>
              <FormInput
                id="nameKana"
                defaultValue={formData.nameKana}
                {...register("nameKana")}
              />
            </FormItem>

            <FormItem>
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
              <FormInput
                id="email"
                defaultValue={formData.email}
                {...register("email")}
              />
              {/* {errors.email && <span>メールアドレスを入力してください。</span>} */}
            </FormItem>

            <FormItem>
              <FormLabel>お問い合わせ内容</FormLabel>
              <FormTextArea
                defaultValue={formData.content}
                {...register("content")}
              />
              {/* {errors.content && <span>お問い合わせ内容を必須項目です</span>} */}
            </FormItem>

            <FormButtonWrap>
              <FormButton type="submit">入力内容を確認する</FormButton>
            </FormButtonWrap>
          </FormList>
        </Layout>
      </motion.div>
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
    margin-top: 20px;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  max-width: 100%;
  border: none;
  background-color: #fff;
  padding: 1em 0.5em;
  font-size: 1.4rem;
  box-sizing: border-box;
  color: ${COLOR.BLACK};
`;

const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 100%;
  border: none;
  background-color: #fff;
  padding: 1em 0.5em;
  font-size: 1.4rem;
  box-sizing: border-box;
  color: ${COLOR.BLACK};
  min-height: 150px;
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
  cursor: pointer;
`;
