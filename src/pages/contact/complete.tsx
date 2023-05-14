import { FormContext } from "@/context/FormContext";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Complete() {
  return (
    <div>
      <p>
        お問い合わせありがとうございます！
        <br />
        1週間以内に返信させていただきますので、お待ち下さい。
      </p>
      <Link href={"/"}>TOPに戻る</Link>
    </div>
  );
}
