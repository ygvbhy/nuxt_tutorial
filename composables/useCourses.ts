import type { CourseWithPath } from '~/types/course';

interface CoursesReturn {
  courses: CourseWithPath[];
  // 제네릭 타입으로 추가 한다면 이렇게 추가 하면 됨
  // 1
  // courses: Maybe<CourseWithPath[]>;
}

export const useCourses = async (): Promise<CoursesReturn> => {
  const { data, error } = await useFetch('/api/courses');
  // 2
  // const { data, error } = await useFetch<CourseWithPath[]>('/api/courses');

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return {
    // 3
    // courses: data.value
    courses: data.value as CourseWithPath[],
  };
};
