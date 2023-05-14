import { FormContext } from "@/context/FormContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">名前</label>
      <input
        id="name"
        defaultValue={formData.name}
        {...register("name", { required: true })}
      />
      {errors.name && <span>名前は必須項目です</span>}

      <label>名前(カナ)</label>
      <input defaultValue={formData.nameKana} {...register("nameKana")} />

      <label>メールアドレス</label>
      <input defaultValue={formData.email} {...register("email")} />

      <label>お問い合わせ内容</label>
      <textarea defaultValue={formData.content} {...register("content")} />

      <button type="submit">入力内容を確認する</button>
    </form>
  );
}
