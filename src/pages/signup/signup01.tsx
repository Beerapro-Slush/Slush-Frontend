import Button from '@components/common/button';
import Layout from '@components/common/layout';
import ProgressBar from '@components/common/progressBar';
import Checkbox from '@components/common/checkbox';
import { useState } from 'react';

export default function Signup() {
  const [checkedTerm, setCheckedTerm] = useState<string[]>([]);

  const onCheckedAll = (checked: boolean): void => {
    if (checked) {
      setCheckedTerm(() => ['term1', 'term2', 'term3']);
    } else if (
      (!checked && checkedTerm.includes('term1')) ||
      (!checked && checkedTerm.includes('term2')) ||
      (!checked && checkedTerm.includes('term3'))
    ) {
      setCheckedTerm(() => []);
    }
  };

  const onChecked = (checked: boolean, id: string): void => {
    if (checked) {
      setCheckedTerm(() => [...checkedTerm, id]);
    } else if (!checked && checkedTerm.includes(id)) {
      setCheckedTerm(() => checkedTerm.filter((el: string) => el !== id));
    }
  };

  return (
    <Layout>
      <ProgressBar totalPage={5} currentPage={1} />
      <h1 className="text-title3 font-medium">
        SLUSH 서비스 이용약관에
        <br /> 동의해주세요.
      </h1>
      <form autoComplete="off" className="space-y-4">
        <div className="mt-8">
          <Checkbox
            id="selectAll"
            text="모두동의 (선택사항 포함)"
            isChecked={checkedTerm.length === 3 ? true : false}
            handler={(e) => onCheckedAll(e.target.checked)}
          />
        </div>
        <div className="mx-2">
          <div className="w-full h-[1px] bg-sc-grays-6 my-[20px]"></div>
          <ul className="mb-64">
            <li className="mb-2">
              <Checkbox
                id="term1"
                text="만 14세 이상"
                isChecked={checkedTerm.includes('term1') ? true : false}
                handler={(e) => onChecked(e.target.checked, e.target.id)}
              />
            </li>
            <li className="mb-2 flex relative">
              <Checkbox
                id="term2"
                text="이용약관 동의"
                isChecked={checkedTerm.includes('term2') ? true : false}
                handler={(e) => onChecked(e.target.checked, e.target.id)}
              />
              <button className="absolute bottom-[1px] right-[154px] ml-2 text-caption1 font-extralight underline decoration-sc-grays-1">
                보기
              </button>
            </li>
            <li className="mb-2 flex relative">
              <Checkbox
                id="term3"
                text="개인정보 처리방침 동의"
                isChecked={checkedTerm.includes('term3') ? true : false}
                handler={(e) => onChecked(e.target.checked, e.target.id)}
              />
              <button className="absolute bottom-[1px] right-[104px] ml-2 text-caption1 font-extralight underline decoration-sc-grays-1">
                보기
              </button>
            </li>
          </ul>
          <Button
            disabled={checkedTerm.length === 3 ? false : true}
            text="동의 후 가입하기"
          ></Button>
        </div>
      </form>
    </Layout>
  );
}
