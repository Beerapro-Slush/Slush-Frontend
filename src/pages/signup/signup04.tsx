import Button from '@components/common/button';
import Layout from '@components/common/layout';
import ProgressBar from '@components/common/progressBar';
import Input from '@components/common/input';
import { useAppSelector } from 'redux/hooks';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@components/common/errorMessage';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTimer from '@hooks/useTimer';

interface SignupForm {
  confirm: number;
}

export default function Signup() {
  const [timer] = useTimer(10, 0);
  const emailState = useAppSelector((state) => state.user.email);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupForm>();

  const router = useRouter();

  const onValid = (form: SignupForm) => {
    console.log(form);
    router.push('/signup/signup05');
  };

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
            <Input disabled name="email" type="text" placeholder={emailState} />
          </div>
          <div>
            <Input
              name="confirm"
              register={register('confirm', {
                required: true,
              })}
              placeholder="입력하신 메일로 전송된 번호를 입력해주세요."
            />
            <ErrorMessage message="전송 된 번호는 10분간 유효합니다." />
          </div>
        </div>

        <div className="mt-8">
          <Button
            // disabled={!watchFields.confirm || Boolean(errors.confirm)}
            pressed
            text={`남은시간 ${timer}`}
          />
        </div>
      </form>
    </Layout>
  );
}
