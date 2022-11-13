import Button from '@components/common/button';
import Input from '@components/common/input';
import Layout from '@components/common/layout';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-4">
        <Button text="동의 후 가입하기" />
        <Button text="동의 후 가입하기" disabled />
        <Input name="email" type="email" placeholder="아이디 (이메일) 입력" />
        <Input
          name="email"
          placeholder="입력하신 메일로 전송된 번호를 입력해주세요."
        />
        <Input
          name="nickname"
          isLabel
          labelText="닉네임"
          placeholder="영문, 한글, 숫자 혼합 최대 12자 가능"
        />
      </div>
    </Layout>
  );
}
