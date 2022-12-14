import Button from '@components/common/button';
import Layout from '@components/common/layout';
import ProgressBar from '@components/common/progressBar';
import Input from '@components/common/input';
import { useForm } from 'react-hook-form';
import Select from '@components/common/select';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setUniversity, setAdmissionYear } from 'redux/slices/userSlice';
import { useRouter } from 'next/router';
import yaerList from '@utils/yearList';
interface SignupForm {
  university: string;
  admissionYear: string;
}

export default function Signup() {
  const dispatch = useAppDispatch();
  const universityState = useAppSelector((state) => state.user.university);
  const admissionYearState = useAppSelector((state) => state.user.admissonYear);

  const { register, handleSubmit, setValue, watch } = useForm<SignupForm>({
    defaultValues: {
      university: universityState,
      admissionYear: admissionYearState,
    },
  });

  const watchFields = watch();
  const router = useRouter();

  const onValid = (form: SignupForm) => {
    const { university, admissionYear } = form;
    dispatch(setUniversity(university));
    dispatch(setAdmissionYear(admissionYear));

    if (university && admissionYear) router.push('/signup/signup03');
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
            register={register('university', { required: true })}
            globalState={universityState}
          />
          <Select
            name="admissionYear"
            placeholder="입학년도를 선택해주세요."
            setValue={setValue}
            options={yaerList}
            globalState={admissionYearState}
          />
        </div>
        <div className="mt-8">
          <Button
            disabled={!watchFields.admissionYear || !watchFields.university}
            text="다음"
          />
        </div>
      </form>
    </Layout>
  );
}
