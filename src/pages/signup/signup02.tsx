import Button from '@components/common/button';
import Layout from '@components/common/layout';
import ProgressBar from '@components/common/progressBar';
import Input from '@components/common/input';
import { useForm } from 'react-hook-form';
import Select from '@components/common/select';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setUserForm } from 'redux/slices/userSlice';

export interface SignupForm {
  university: string;
  admission_year: number;
}

export default function Signup() {
  const { register, handleSubmit, setValue } = useForm<SignupForm>();

  const dispatch = useAppDispatch();
  const univState = useAppSelector((state) => state.user.university);
  const admissionYearState = useAppSelector(
    (state) => state.user.admission_year,
  );

  const onValid = (form: SignupForm) => {
    const { university, admission_year } = form;
    dispatch(setUserForm({ admission_year, university }));
    console.log(form);
  };

  const thisYear = new Date().getFullYear();
  const admissionYearList = () => {
    const option = [];
    for (let i = 2015; i <= thisYear; i++) {
      option.push({ option: i.toString() });
    }
    return option;
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
            defaultValue={univState}
          />
          <Select
            name="admission_year"
            placeholder="입학년도를 선택해주세요."
            setValue={setValue}
            options={admissionYearList()}
            globalState={admissionYearState}
          />
        </div>
        <div className="mt-8">
          <Button text="다음" />
        </div>
      </form>
    </Layout>
  );
}
