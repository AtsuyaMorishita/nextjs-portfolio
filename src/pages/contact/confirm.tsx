import { FormContext } from "@/context/FormContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    fetch(`https://${newtSpaceId}.form.newt.so/v1/${newtApiKey}`, {
      method: "POST",
      body: JSON.stringify(formData), // JSON文字列化して送信
      headers: {
        "Content-Type": "application/json", // JSON形式でデータを送信することをサーバーに伝える
        Accept: "application/json", // レスポンスをJSONで受け取る
      },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    //データのリセット
    setFormData({});
    //ページ遷移
    router.push("complete");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>名前</p>
      <p>{formData.name}</p>

      <p>名前(カナ)</p>
      <p>{formData.nameKana}</p>

      <p>メールアドレス</p>
      <p>{formData.email}</p>

      <p>お問い合わせ内容</p>
      <p>{formData.content}</p>

      <button type="submit">送信する</button>
      <Link href={"/contact"}>内容を修正する</Link>
    </form>
  );
}
