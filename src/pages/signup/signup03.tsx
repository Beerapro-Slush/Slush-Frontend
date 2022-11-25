import Button from '@components/common/button';
import Layout from '@components/common/layout';
import ProgressBar from '@components/common/progressBar';
import Input from '@components/common/input';

export default function Signup() {
  return (
    <Layout>
      <ProgressBar totalPage={5} currentPage={3} />
      <h1 className="text-title3 font-medium">
        아이디로 사용될 이메일을 <br />
        입력 후 인증해주세요.
      </h1>
      <form autoComplete="off" className="mt-10">
        <div className="grid grid-cols-1 gap-4">
          <Input name="email" placeholder="아이디 (이메일) 입력" />
          <Input
            name="confirm"
            placeholder="입력하신 메일로 전송된 번호를 입력해주세요."
          />
        </div>
        <div className="text-sc-err text-caption2 flex items-center mt-[6px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V11.5C11.25 11.0858 11.5858 10.75 12 10.75Z"
              fill="#BA1E45"
            />
            <path
              d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
              fill="#BA1E45"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75Z"
              fill="#BA1E45"
            />
          </svg>
          <span className="pl-[2px]">전송 된 번호는 10분간 유효합니다.</span>
        </div>

        <div className="mt-8">
          <Button text="다음" />
          <Button text="인증번호 전송" />
        </div>
      </form>
    </Layout>
  );
}
