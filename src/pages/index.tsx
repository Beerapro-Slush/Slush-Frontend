import Button from '@components/common/button';
import Input from '@components/common/input';
import Layout from '@components/common/layout';

export default function Home() {
  return (
    <Layout>
      <form autoComplete="off" className="space-y-4">
        <Input name="email" type="email" placeholder="아이디 (이메일) 입력" />
        <Input
          name="confirmEmail"
          type="text"
          placeholder="입력하신 메일로 전송된 번호를 입력해주세요."
        />
        <Input
          name="nickName"
          type="text"
          isLabel
          labelText="닉네임"
          placeholder="영문, 한글, 숫자 혼합 최대 12자 가능"
        />
        <Input
          name="password"
          type="password"
          isLabel
          labelText="비밀번호"
          placeholder="영대소문자, 숫자 최소 8자 이상"
        />
        <Input
          name="confirmPassword"
          type="password"
          isLabel
          labelText="비밀번호 확인"
          placeholder="비밀번호 재입력"
        />
        <Button text="동의 후 가입하기" />
        <Button text="동의 후 가입하기" disabled />
      </form>
    </Layout>
  );
}
