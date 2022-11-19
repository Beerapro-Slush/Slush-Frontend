import Button from '@components/common/button';
import Layout from '@components/common/layout';
import ProgressBar from '@components/common/progressBar';
import Input from '@components/common/input';

export default function Signup() {
  return (
    <Layout>
      <ProgressBar totalPage={5} currentPage={2} />
      <h1 className="text-title3 font-medium">
        인증 받으실 학교와 학번을 <br /> 선택해주세요.????
      </h1>
      <form autoComplete="off" className="mt-10">
        <div className="grid grid-cols-1 gap-4">
          <Input
            name="university"
            placeholder="재학 중인 학교를 검색해주세요."
          />
          <Input name="admission_year" placeholder="입학년도를 선택해주세요." />
        </div>
        <div className="mt-8">
          <Button text="다음" />
        </div>
      </form>
    </Layout>
  );
}
