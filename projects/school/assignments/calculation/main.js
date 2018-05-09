$(() => {
  $('.s').click(() => {
    const finalExamScore = $('#final-exam').val();
    const quiz1Score = $('#quiz-1').val();
    const quiz2Score = $('#quiz-2').val();
    const pP1Score = $('#pp1').val();
    const pP2Score = $('#pp2').val();
    const tPScore = $('#tp').val();

    if ((!finalExamScore || !quiz1Score || !quiz2Score || !pP1Score ||
      !pP2Score || !tPScore) || finalExamScore > 100 || quiz1Score > 100 ||
      quiz2Score > 100 || pP1Score > 100 || pP2Score > 100 || tPScore > 100) {
        alert('Invalid Input');
      } else {
        const result = ((finalExamScore / 4) + (quiz1Score / 10) +
        (quiz2Score / 10) + (pP1Score * 0.15) + (pP2Score * 0.15) +
        (tPScore * 0.15));
        $('.result').html(result);
      }
  });
});
    const finalExamScore = $('#final-exam').val();
