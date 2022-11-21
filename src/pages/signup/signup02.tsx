import Button from '@components/common/button';
import Layout from '@components/common/layout';
import ProgressBar from '@components/common/progressBar';
import Input from '@components/common/input';
import { useForm } from 'react-hook-form';
import Select from '@components/common/select';

export interface SignupForm {
  university: string;
  admission_year: number;
}

export default function Signup() {
  const { register, handleSubmit, setValue } = useForm<SignupForm>();

  const onValid = (form: SignupForm) => {
    console.log(form);
  };

  return (
    <Layout>
      <ProgressBar totalPage={5} currentPage={2} />
      <h1 className="text-title3 font-medium">
        인증 받으실 학교와 학번을 <br /> 선택해주세요.????
      </h1>
      <form onSubmit={handleSubmit(onValid)} className="mt-10">
        <div className="grid grid-cols-1 gap-4">
          <Input
            name="university"
            type="text"
            placeholder="재학 중인 학교를 검색해주세요."
            register={register('university')}
          />
          <Select
            name="admission_year"
            placeholder="입학년도를 선택해주세요."
            setValue={setValue}
            options={[
              { id: 1, option: '2015' },
              { id: 2, option: '2016' },
              { id: 3, option: '2017' },
              { id: 4, option: '2018' },
              { id: 5, option: '2019' },
              { id: 6, option: '2020' },
              { id: 7, option: '2021' },
              { id: 8, option: '2022' },
            ]}
          />
        </div>
        <div className="mt-8">
          <Button text="다음" />
        </div>
      </form>
    </Layout>
  );
}
