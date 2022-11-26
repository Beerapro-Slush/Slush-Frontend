import Button from '@components/common/button';
import Layout from '@components/common/layout';
import ProgressBar from '@components/common/progressBar';
import Input from '@components/common/input';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useForm } from 'react-hook-form';
import { setUserForm } from 'redux/slices/userSlice';
import ErrorMessage from '@components/common/errorMessage';
import { useRouter } from 'next/router';
interface SignupForm {
  email: string;
}

export default function Signup() {
  const dispatch = useAppDispatch();
  const emailState = useAppSelector((state) => state.user.email);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupForm>({
    defaultValues: { email: emailState },
  });

  const onValid = (form: SignupForm) => {
    const { email } = form;
    dispatch(setUserForm({ email }));
  };

  const watchFields = watch();

  return (
    <Layout>
      <ProgressBar totalPage={5} currentPage={3} />
      <h1 className="text-title3 font-medium">
        아이디로 사용될 이메일을 <br />
        입력 후 인증해주세요.
      </h1>
      <form onSubmit={handleSubmit(onValid)} className="mt-10">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Input
              register={register('email', {
                required: true,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: '이메일 형식이 올바르지 않습니다.',
                },
              })}
              name="email"
              type="text"
              globalState={emailState}
              placeholder="아이디 (이메일) 입력"
            />
            {errors.email && errors.email.message && (
              <ErrorMessage message={errors.email.message} />
            )}
          </div>
          <div className="hidden">
            <Input
              name="confirm"
              placeholder="입력하신 메일로 전송된 번호를 입력해주세요."
            />
            <ErrorMessage message="전송 된 번호는 10분간 유효합니다." />
          </div>
        </div>
        <div className="mt-8">
          <Button
            disabled={!watchFields.email || Boolean(errors.email)}
            text="다음"
          />
          {/* <Button text="인증번호 전송" /> */}
        </div>
      </form>
    </Layout>
  );
}
